import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const imageModules = import.meta.glob('../../02_Selected_Practice/**/*.{png,jpg,jpeg,webp}', { eager: true });
const textModules = import.meta.glob('../../02_Selected_Practice/**/*.txt', { eager: true, query: '?raw', import: 'default' });

const parseDescription = (rawText) => {
  if (!rawText) return null;
  const sections = {
    credit: '',
    about_kr: '',
    about_en: '',
    link: ''
  };
  
  let currentSection = null;
  const lines = rawText.split('\n');
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed === '[CREDIT]') {
      currentSection = 'credit';
    } else if (trimmed === '[ABOUT_KR]') {
      currentSection = 'about_kr';
    } else if (trimmed === '[ABOUT_EN]') {
      currentSection = 'about_en';
    } else if (trimmed === '[LINK]') {
      currentSection = 'link';
    } else {
      if (currentSection) {
        if (sections[currentSection]) {
          sections[currentSection] += '\n' + line;
        } else {
          sections[currentSection] = line;
        }
      }
    }
  }
  
  for (const key in sections) {
    sections[key] = sections[key].trim();
  }
  
  return sections;
};

const getYouTubeId = (url) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const getSeoAltText = (project, index, isRepresentative = false) => {
  const brandingKeywords = ["브랜드 디자인", "브랜딩", "디자인", "패키지 디자인", "푸드 브랜딩", "F&B브랜딩"];
  const filmKeywords = [
    "글랜스 영상 제작",
    "글랜스 영상 촬영",
    "글랜스 유튜브 제작",
    "글랜스 유튜브 콘텐츠",
    "글랜스 유튜브 촬영",
    "유튜브 촬영",
    "다큐 촬영",
    "다큐 제작",
    "다큐 제작사",
    "브랜드 영상 촬영",
    "아트 필름 촬영",
    "패션 룩북 촬영"
  ];
  const fallbackKeywords = [
    "glance",
    "글랜스 스튜디오",
    "글랜스 디자인",
    "glance creative house",
    "글랜스 크리에이티브 하우스",
    "글랜스크리에이티브하우스"
  ];

  const category = project?.category || '';
  let keywords = fallbackKeywords;
  
  if (category === 'Branding') {
    keywords = brandingKeywords;
  } else if (category === 'Film') {
    keywords = filmKeywords;
  }

  const keyword = keywords[index % keywords.length];
  
  if (isRepresentative) {
    return `${project.title} 대표 이미지 - ${keyword} | glance`;
  }
  return `${project.title} 프로젝트 이미지 ${index + 1} - ${keyword} | glance`;
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [orientations, setOrientations] = React.useState({});

  const handleImageLoad = (url, event) => {
    const { naturalWidth, naturalHeight } = event.target;
    const orientation = naturalHeight > naturalWidth ? 'portrait' : 'landscape';
    setOrientations(prev => {
      if (prev[url] === orientation) return prev;
      return {
        ...prev,
        [url]: orientation
      };
    });
  };

  const project = useMemo(() => {
    const projectMap = {};
    
    // Process image modules
    for (const [path, module] of Object.entries(imageModules)) {
      const parts = path.split('/');
      const filename = parts.pop();
      const projectDir = parts.pop(); // Leaf Directory
      
      if (projectDir === '02_Selected_Practice' || filename.startsWith('.')) continue;

      const category = parts[parts.length - 1];
      const cleanTitle = projectDir.replace(/^\d+\.\s*/, '');

      if (!projectMap[cleanTitle]) {
        projectMap[cleanTitle] = {
          title: cleanTitle,
          images: [],
          description: null,
          category: category
        };
      }
      projectMap[cleanTitle].images.push({ url: module.default, name: filename });
    }

    // Process text modules
    for (const [path, text] of Object.entries(textModules)) {
      const parts = path.split('/');
      const filename = parts.pop(); // description.txt
      const projectDir = parts.pop(); // Leaf Directory
      
      if (projectDir === '02_Selected_Practice') continue;

      const cleanTitle = projectDir.replace(/^\d+\.\s*/, '');
      if (projectMap[cleanTitle]) {
        projectMap[cleanTitle].description = text;
      }
    }
    
    const found = projectMap[id];
    if (found) {
      found.images.sort((a, b) => a.name.localeCompare(b.name));
    }
    return found;
  }, [id]);

  const parsedDesc = useMemo(() => {
    return parseDescription(project?.description);
  }, [project]);

  const youtubeId = useMemo(() => {
    return getYouTubeId(parsedDesc?.link);
  }, [parsedDesc]);

  const representativeImage = useMemo(() => {
    if (!project?.images || project.images.length === 0) return null;
    
    // 1. Try filename ends with _main (ignoring extension)
    const mainImg = project.images.find(img => {
      const nameWithoutExt = img.name.substring(0, img.name.lastIndexOf('.')) || img.name;
      return nameWithoutExt.endsWith('_main');
    });
    if (mainImg) return mainImg;
    
    // 2. Try filename contains _thumbnail
    const thumbImg = project.images.find(img => img.name.includes('_thumbnail'));
    if (thumbImg) return thumbImg;
    
    // 3. Alphabetical fallback
    const sorted = [...project.images].sort((a, b) => a.name.localeCompare(b.name));
    return sorted[0];
  }, [project]);

  const galleryImages = useMemo(() => {
    if (!project?.images) return [];
    return project.images;
  }, [project]);

  const isAllPortrait = useMemo(() => {
    if (galleryImages.length === 0) return false;
    const detected = galleryImages.map(img => orientations[img.url]);
    const allDetected = detected.every(Boolean);
    if (allDetected) {
      return detected.every(orient => orient === 'portrait');
    }
    const hasLandscape = detected.some(orient => orient === 'landscape');
    if (hasLandscape) return false;
    return false;
  }, [galleryImages, orientations]);

  const creditColumns = useMemo(() => {
    if (!parsedDesc?.credit) return { col1: [], col2: [] };
    
    const items = parsedDesc.credit.split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0);
      
    if (items.length > 3) {
      return {
        col1: items.slice(0, 3),
        col2: items.slice(3)
      };
    } else {
      return {
        col1: items,
        col2: []
      };
    }
  }, [parsedDesc]);

  if (!project) {
    return (
      <section className="page-container" style={{ paddingTop: '160px' }}>
        <h2 className="page-title">Project Not Found</h2>
        <button onClick={() => navigate(-1)} style={{ fontSize: '1.2rem', textDecoration: 'underline' }}>Back</button>
      </section>
    );
  }

  return (
    <section className="page-container" style={{ paddingTop: '160px', paddingBottom: '160px' }}>
      <button 
        onClick={() => navigate(-1)} 
        className="en-text fade-up-seq" 
        style={{ marginBottom: '60px', fontSize: '1.2rem', cursor: 'pointer', borderBottom: '2px solid #000', paddingBottom: '4px', animationDelay: '0.1s' }}
      >
        ← BACK TO PRACTICE
      </button>
      
      <h2 className="en-text fade-up-seq" style={{ fontSize: '3rem', marginBottom: '80px', textAlign: 'center', animationDelay: '0.3s' }}>
        {project.title}
      </h2>

      {/* Structured project details layout */}
      {parsedDesc && (
        <div className="project-detail-grid fade-up-seq" style={{ animationDelay: '0.5s' }}>
          
          {/* Top Row: Credit Overview (Left Column) */}
          {parsedDesc.credit && (
            <div className="grid-credit">
              <h3 className="credit-overview-title">Overview</h3>
              <div className="credit-split-container">
                {/* Column 1 (Max 3 lines) */}
                {creditColumns.col1.length > 0 && (
                  <div className="credit-split-col">
                    {creditColumns.col1.map((line, lIdx) => {
                      const parts = line.split(':');
                      if (parts.length >= 2) {
                        const label = parts[0].trim();
                        const value = parts.slice(1).join(':').trim();
                        return (
                          <div key={lIdx} className="credit-split-item">
                            <span className="credit-split-label">{label}</span>
                            <span className="credit-split-value"> : {value}</span>
                          </div>
                        );
                      }
                      return (
                        <div key={lIdx} className="credit-split-item">
                          {line}
                        </div>
                      );
                    })}
                  </div>
                )}
                
                {/* Column 2 (Remaining lines) */}
                {creditColumns.col2.length > 0 && (
                  <div className="credit-split-col">
                    {creditColumns.col2.map((line, lIdx) => {
                      const parts = line.split(':');
                      if (parts.length >= 2) {
                        const label = parts[0].trim();
                        const value = parts.slice(1).join(':').trim();
                        return (
                          <div key={lIdx} className="credit-split-item">
                            <span className="credit-split-label">{label}</span>
                            <span className="credit-split-value"> : {value}</span>
                          </div>
                        );
                      }
                      return (
                        <div key={lIdx} className="credit-split-item">
                          {line}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Row 2: Left Column Media (YouTube Player or Representative Image) */}
          <div className="grid-media">
            <div className="representative-media-container">
              {youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}?autoplay=0`}
                  title={`${project.title} Video Player`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : representativeImage ? (
                <img 
                  src={representativeImage.url} 
                  alt={getSeoAltText(project, 0, true)} 
                />
              ) : null}
            </div>
            
            {/* Custom link (if not YouTube video, display custom project link button) */}
            {parsedDesc.link && !youtubeId && (
              <div>
                <a 
                  href={parsedDesc.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="en-text project-link-button"
                >
                  VIEW PROJECT LINK <span style={{ marginLeft: '8px' }}>→</span>
                </a>
              </div>
            )}
          </div>

          {/* Row 2: Right Column Text (About project details using Pretendard font) */}
          <div className="grid-about">
            <h3 className="about-project-title">About project</h3>
            
            {parsedDesc.about_kr && (
              <div style={{ marginBottom: parsedDesc.about_en ? '2.5rem' : '0' }}>
                {parsedDesc.about_kr.split('\n').map((paragraph, pIdx) => (
                  <p key={pIdx} className="about-text-paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
            
            {parsedDesc.about_en && (
              <div>
                {parsedDesc.about_en.split('\n').map((paragraph, pIdx) => (
                  <p key={pIdx} className="about-text-paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>

        </div>
      )}
      
      {/* Bottom gallery for project images */}
      <div className={`project-images-grid ${isAllPortrait ? 'all-portrait' : ''}`}>
        {galleryImages.map((img, idx) => {
          const orientation = orientations[img.url] || 'landscape';
          return (
            <div 
              key={idx} 
              className={`project-image-item ${orientation} fade-up-seq`}
              style={{ animationDelay: `${parsedDesc ? 0.7 : 0.5 + idx * 0.2}s` }}
            >
              <img 
                src={img.url} 
                alt={getSeoAltText(project, idx)} 
                onLoad={(e) => handleImageLoad(img.url, e)}
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
            </div>
          );
        })}
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '60px' }}>
        <button 
          onClick={() => navigate(-1)} 
          className="en-text"
          style={{ fontSize: '1.2rem', cursor: 'pointer', borderBottom: '2px solid #000', paddingBottom: '4px' }}
        >
          ← BACK TO PRACTICE
        </button>
      </div>
    </section>
  );
};

export default ProjectDetail;

