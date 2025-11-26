export default function CarCardSkeleton() {
  return (
    <div className="rentacar-card-box p-3 mb-3">
      <div className="row">
        <div className="col-md-4">
          <div className="skeleton skeleton-img"></div>
        </div>

        <div className="col-md-8">
          <div className="skeleton skeleton-title"></div>
          <div className="skeleton skeleton-line"></div>
          <div className="skeleton skeleton-line"></div>
          <div className="skeleton skeleton-line short"></div>
        </div>
      </div>
    </div>
  );
}
