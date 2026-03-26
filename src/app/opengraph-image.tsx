import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Ismael Ruiz - Full Stack Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: '1200px',
        height: '630px',
        backgroundColor: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '80px 100px',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glow accent */}
      <div
        style={{
          position: 'absolute',
          top: '-120px',
          right: '-80px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(64,198,255,0.18) 0%, transparent 70%)',
        }}
      />

      {/* Name */}
      <div
        style={{
          fontSize: '80px',
          fontWeight: 700,
          color: '#ededed',
          lineHeight: 1,
          marginBottom: '8px',
          letterSpacing: '-0.02em',
        }}
      >
        ISMAEL RUIZ
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: '80px',
          fontWeight: 700,
          color: '#40c6ff',
          lineHeight: 1,
          marginBottom: '32px',
          letterSpacing: '-0.02em',
        }}
      >
        FULL STACK DEV
      </div>

      {/* Description */}
      <div
        style={{
          fontSize: '22px',
          color: 'rgba(237,237,237,0.55)',
          lineHeight: 1.5,
          maxWidth: '580px',
        }}
      >
        Building high-quality web applications with clean code and thoughtful design.
      </div>

      {/* Tech stack pills */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '12px',
          marginTop: '48px',
        }}
      >
        {['React', 'TypeScript', 'Node.js', 'Next.js'].map((tech) => (
          <div
            key={tech}
            style={{
              padding: '8px 20px',
              borderRadius: '8px',
              border: '1px solid rgba(64,198,255,0.3)',
              fontSize: '15px',
              fontWeight: 500,
              color: 'rgba(237,237,237,0.7)',
              backgroundColor: 'rgba(64,198,255,0.07)',
            }}
          >
            {tech}
          </div>
        ))}
      </div>

      {/* Domain */}
      <div
        style={{
          position: 'absolute',
          bottom: '48px',
          right: '100px',
          fontSize: '16px',
          color: 'rgba(237,237,237,0.3)',
          letterSpacing: '0.05em',
        }}
      >
        ismaelruizcarlin.dev
      </div>
    </div>,
    { ...size }
  );
}
