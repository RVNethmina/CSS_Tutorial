import { Routes, Route } from "react-router-dom";
import QrCodeComponent from "./projects/qrCodeComponent/QrCodeComponent";
import ProductPreview from "./projects/productPreviewPathComponent/ProductPreview";
import ResultSummaryComponet from "./projects/resultSummary/ResultSummaryComponent";
import StatsPreviewCard from "./projects/statsPreviewCard/StatsPreviewCard";
import OrderSummaryComponent from "./projects/orderSummaryComponent/OrderSummaryComponent";
import ThreeColumnPreviewCard from "./projects/threeColumnPreviewCard/ThreeColumnPreviewCard";
import NftPreviewCard from "./projects/nftPreviewCard/NftPreviewCard";
import InteractiveRatingComponent from "./projects/interactiveRatingComponent/InteractiveRatingComponent";
import FaqAccordianMainComponent from "./projects/faqAccordianMainComponent/FaqAccordianMainComponent";
import ArticlePreviewComponent from "./projects/articlePreviewComponent/ArticlePreviewComponent";
import "./App.css";


function App() {
  return (
    <Routes>
      <Route path='/' element={<ArticlePreviewComponent />} />
      <Route path='/faq-accordian' element={<FaqAccordianMainComponent />} />
      <Route path='/rating-com' element={<InteractiveRatingComponent />}/>
      <Route path='/nft-component' element={<NftPreviewCard />}/>
      <Route path='/three-column' element={<ThreeColumnPreviewCard />} />
      <Route path='/order-summary' element={<OrderSummaryComponent />}/>
      <Route path='/stats-preview' element={<StatsPreviewCard />} />
      <Route path="/result-summary" element={<ResultSummaryComponet />}/>
      <Route path="/qr" element={<QrCodeComponent />} />
      <Route path='/product-review' element={<ProductPreview />}/>
    </Routes>
  );
}

export default App;
