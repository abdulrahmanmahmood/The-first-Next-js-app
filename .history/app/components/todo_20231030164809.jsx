"use client"
function todo() {
  useEffect(() => {
    effect
    return () => {
      cleanup
    };
  }, []);
  return (
    <div>
      
    </div>
  )
}

export default todo