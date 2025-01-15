export const demoCode = {
  language: 'jsx',
  code: `// Example React component
function Welcome({ name }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  return (
    <div className="container">
      <h1>Hello, {name}!</h1>
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
    </div>
  );
}`
};
