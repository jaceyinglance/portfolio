import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const imageModules = import.meta.glob('../../02_Selected_Practice/**/*.{png,jpg,jpeg,webp}', { eager: true });

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = useMemo(() => {
    const projectMap = {};
    for (const [path, module] of Object.entries(imageModules)) {
      const parts = path.split('/');
      const filename = parts.pop();
      const projectDir = parts.pop(); // Leaf Directory
      
      if (projectDir === '02_Selected_Practice' || filename.startsWith('.')) continue;

      const cleanTitle = projectDir.replace(/^\d+\.\s*/, '');

      if (!projectMap[cleanTitle]) {
        projectMap[cleanTitle] = {
          title: cleanTitle,
          images: []
        };
      }
      projectMap[cleanTitle].images.push({ url: module.default, name: filename });
    }
    
    const found = projectMap[id];
    if (found) {
      found.images.sort((a, b) => a.name.localeCompare(b.name));
    }
    return found;
  }, [id]);

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
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        {project.images.map((img, idx) => (
          <img 
            key={idx} 
            src={img.url} 
            alt={`${project.title} - ${idx + 1}`} 
            className="fade-up-seq"
            style={{ width: '100%', height: 'auto', display: 'block', animationDelay: `${0.5 + idx * 0.2}s` }} 
          />
        ))}
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
