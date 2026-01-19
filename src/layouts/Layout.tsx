export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
        
        :root {
          --color-burgundy: #591B27;
          --color-cream: #F5F3F0;
        }
        
        body {
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #F5F3F0;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #591B27;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #4a1620;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Selection color */
        ::selection {
          background: #591B27;
          color: white;
        }
      `}</style>
      {children}
    </div>
  );
}
