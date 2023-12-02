import "./Card.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import NornalCall from "./components/NornalCall";
import CachedCall from "./components/CachedCall";
// import SearchFilter from "./components/SearchFilter";
// import Counter from "./Counter";
// import CodeSplitting from "./components/CodeSplitting";
// import PromisesAndAsyncAwait from "./components/PromisesAndAsyncAwait";
// import CustomHook from "./components/CustomHook";
// import ArrayOfFunction from "./components/ArrayOfFunction";
// import Family from "./components/Family";
// import { familyTree } from "./components/data";
// import HelperFunction from "./components/HelperFunction";
// import LazyLoading from "./components/LazyLoading";
// import AddComponent from "./components/AddComponent";
// import Name from "./components/Name";
// import Debouncing from "./components/Debouncing";
// import REST from "./components/REST";
// import ReactFragment from "./components/ReactFragment";
// import InnerHtml from "./components/InnerHtml";
// import Controllers from "./components/Controllers";
// import Styling from "./components/Styling";
// import DynamicInputs from "./components/DynamicInputs";
// import FormInReact from "./components/FormInReact";
// import KeysInReact from "./components/KeysInReact";
// import Add from "./components/Add";
// import InlineConditionalExpressions from "./components/InlineConditionalExpressions";
// import Parent from "./components/Parent";
// import Map from "./components/Map";
// import Filter from "./components/Filter";
// import Count from "./components/Count";
// import StateUsingClassComponent from "./components/StateUsingClassComponent";

function App() {
  let queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NornalCall />} />
            <Route path="/normal-call" element={<NornalCall />} />
            <Route path="/cached-call" element={<CachedCall />} />
          </Routes>
        </BrowserRouter>
        {/* <Counter /> */}
        {/* <SearchFilter /> */}
        {/* <CodeSplitting /> */}
        {/* <PromisesAndAsyncAwait /> */}
        {/* <CustomHook /> */}
        {/* <ArrayOfFunction /> */}
        {/* <Family familyTree={familyTree} /> */}
        {/* <HelperFunction /> */}
        {/* <LazyLoading /> */}
        {/* <AddComponent /> */}
        {/* <Name /> */}
        {/* <Debouncing /> */}
        {/* <REST /> */}
        {/* <ReactFragment /> */}
        {/* <InnerHtml /> */}
        {/* <Controllers /> */}
        {/* <Styling /> */}
        {/* <DynamicInputs /> */}
        {/* <FormInReact /> */}
        {/* <KeysInReact /> */}
        {/* <Add /> */}
        {/* <InlineConditionalExpressions /> */}
        {/* <Parent /> */}
        {/* <StateUsingClassComponent /> */}
        {/* <Count /> */}
        {/* <Filter /> */}
        {/* <Map /> */}
      </>
    </QueryClientProvider>
  );
}

export default App;
