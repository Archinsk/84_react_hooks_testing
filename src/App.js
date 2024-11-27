import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import UseActionStateRoute from "./routes/UseActionStateRoute";
import UseCallbackRoute from "./routes/UseCallbackRoute";
import UseContextRoute from "./routes/UseContextRoute";
import UseDebugValueRoute from "./routes/UseDebugValueRoute";
import UseDeferredValueRoute from "./routes/UseDeferredValueRoute";
import UseEffectRoute from "./routes/UseEffectRoute";
import UseIdRoute from "./routes/UseIdRoute";
import UseImperativeHandleRoute from "./routes/UseImperativeHandleRoute";
import UseInsertionEffectRoute from "./routes/UseInsertionEffectRoute";
import UseLayoutEffectRoute from "./routes/UseLayoutEffectRoute";
import UseMemoRoute from "./routes/UseMemoRoute";
import UseOptimisticRoute from "./routes/UseOptimisticRoute";
import UseReducerRoute from "./routes/UseReducerRoute";
import UseStateRoute from "./routes/UseStateRoute";
import UseSyncExternalStoreRoute from "./routes/UseSyncExternalStoreRoute";
import UseRefRoute from "./routes/UseRefRoute";
import UseTransitionRoute from "./routes/UseTransitionRoute";
import HomeRoute from "./routes/HomeRoute";

function App() {
  return (
    <div className="app">
      <aside>
        <Link to="/">general</Link>
        <Link to="/useactionstate">useActionState</Link>
        <Link to="/usecallback">useCallback</Link>
        <Link to="/usecontextrroute">useContext</Link>
        <Link to="/usedebugvalueroute">useDebugValue</Link>
        <Link to="/usedeferredvalueroute">useDeferredValue</Link>
        <Link to="/useeffectroute">useEffect</Link>
        <Link to="/useidroute">useId</Link>
        <Link to="/useimperativehandleroute">useImperativeHandle</Link>
        <Link to="/useinsertioneffectroute">useInsertionEffect</Link>
        <Link to="/uselayouteffectroute">useLayoutEffect</Link>
        <Link to="/usememoroute">useMemo</Link>
        <Link to="/useoptimisticroute">useOptimistic</Link>
        <Link to="/usereducerroute">useReducer</Link>
        <Link to="/userefroute">useRef</Link>
        <Link to="/usestateroute">useState</Link>
        <Link to="/usesyncexternalstoreroute">useSyncExternalStore</Link>
        <Link to="/usetransitionroute">useTransition</Link>
      </aside>
      <main>
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/useactionstate" element={<UseActionStateRoute />} />
          <Route path="/usecallback" element={<UseCallbackRoute />} />
          <Route path="/usecontextrroute" element={<UseContextRoute />} />
          <Route path="/usedebugvalueroute" element={<UseDebugValueRoute />} />
          <Route
            path="/usedeferredvalueroute"
            element={<UseDeferredValueRoute />}
          />
          <Route path="/useeffectroute" element={<UseEffectRoute />} />
          <Route path="/useidroute" element={<UseIdRoute />} />
          <Route
            path="/useimperativehandleroute"
            element={<UseImperativeHandleRoute />}
          />
          <Route
            path="/useinsertioneffectroute"
            element={<UseInsertionEffectRoute />}
          />
          <Route
            path="/uselayouteffectroute"
            element={<UseLayoutEffectRoute />}
          />
          <Route path="/usememoroute" element={<UseMemoRoute />} />
          <Route path="/useoptimisticroute" element={<UseOptimisticRoute />} />
          <Route path="/usereducerroute" element={<UseReducerRoute />} />
          <Route path="/userefroute" element={<UseRefRoute />} />
          <Route path="/usestateroute" element={<UseStateRoute />} />
          <Route
            path="/usesyncexternalstoreroute"
            element={<UseSyncExternalStoreRoute />}
          />
          <Route path="/usetransitionroute" element={<UseTransitionRoute />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
