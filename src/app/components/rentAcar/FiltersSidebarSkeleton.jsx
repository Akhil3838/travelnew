export default function FiltersSidebarSkeleton() {
  return (
    <div className="p-3">
      {[1,2,3].map((section) => (
        <div key={section} className="mb-4">
          <div className="skeleton skeleton-title mb-2"></div>
          {[1,2,3,4].map((item) => (
            <div key={item} className="skeleton skeleton-line mb-2"></div>
          ))}
        </div>
      ))}
    </div>
  );
}
