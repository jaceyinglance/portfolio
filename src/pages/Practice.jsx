import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

// Load images dynamically
const imageModules = import.meta.glob('../../02_Selected_Practice/**/*.{png,jpg,jpeg,webp}', { eager: true });

const Practice = () => {
  const projects = useMemo(() => {
    const projectMap = {};
    for (const [path, module] of Object.entries(imageModules)) {
      const parts = path.split('/');
      const filename = parts.pop();
      const projectDir = parts.pop(); // Leaf Directory
      
      if (projectDir === '02_Selected_Practice' || filename.startsWith('.')) continue;

      const cleanTitle = projectDir.replace(/^\d+\.\s*/, '');

      if (!projectMap[cleanTitle]) {
        projectMap[cleanTitle] = {
          id: cleanTitle,
          title: cleanTitle,
          originalDir: projectDir,
          images: []
        };
      }
      projectMap[cleanTitle].images.push({ url: module.default, name: filename });
    }
    return Object.values(projectMap).sort((a, b) => a.originalDir.localeCompare(b.originalDir));
  }, []);

  const beliefParagraphs = [
    "A Belief",
    "보이는 것 너머에는, 언제나\n보이는 것 이상의 무언가가 있습니다.\n사람 안에, 브랜드 안에,\n그리고 스쳐가는 모든 사소한 것들 안에도.",
    "glance는\n스쳐가는 것들 속에서 의미를 발견하고\n아직 언어가 없는 의미에 이름을 붙여,\n느껴지게 만드는 일의 가치를 믿습니다.",
    "More than a glance.\n스쳐 지나는 것들에, 울림을 불어넣는 곳.\n순간의 의미를 만드는 곳.",
    "Beyond what is seen,\nthere is always something more.\nWithin people. Within brands.\nAnd within even the most fleeting moments.",
    "At glance,\nwe find meaning in what passes by—\nand give language to what has yet to be named,\nso it can be felt.",
    "More than a glance.\nWhere fleeting moments begin to resonate.\nWhere meaning takes form."
  ];

  return (
    <section className="page-container">
      <h2 className="page-title en-text fade-up-seq" style={{ animationDelay: '0.1s' }}>02. PRACTICE</h2>
      
      <div className="practice-grid">
        {projects.map((proj, idx) => {
          const showBelief = (idx + 1) % 2 === 0;
          const beliefIndex = Math.floor(idx / 2) % beliefParagraphs.length;
          
          // Sort images so we always grab the first one alphabetically for fallback
          proj.images.sort((a, b) => a.name.localeCompare(b.name));
          
          // Find the thumbnail image, or fallback to the first one
          const thumbObj = proj.images.find(img => img.name.includes('_thumbnail')) || proj.images[0];

          return (
            <React.Fragment key={idx}>
              <Link to={`/practice/${encodeURIComponent(proj.id)}`} className="practice-item" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="practice-thumb-container">
                  <img src={thumbObj.url} className="practice-thumb" alt={proj.title} />
                </div>
                <div className="practice-title">{proj.title}</div>
              </Link>

              {showBelief && (
                <div className="belief-text-block">
                  {beliefParagraphs[beliefIndex]}
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default Practice;
