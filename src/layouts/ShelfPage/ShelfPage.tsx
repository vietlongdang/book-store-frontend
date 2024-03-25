import { Loans } from "./components/Loans.tsx";

export const ShelfPage = () => {
  return (
    <div className="container">
      <div className="mt-3">
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-loans"
            role="tabpanel"
            aria-labelledby="nav-loans-tab"
          >
            <Loans />
          </div>
          <div
            className="tab-pane fade"
            id="nav-history"
            role="tabpanel"
            aria-labelledby="nav-history-tab"
          >
            Checkout History
          </div>
        </div>
      </div>
    </div>
  );
};
