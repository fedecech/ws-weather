import { useStormGlass } from '../hooks/useStormGlass';
import { useCurrentWeather } from '../hooks/useCurrentWeather';

export const Waves = () => {
  const w = useCurrentWeather();

  const s = useStormGlass(w?.coords?.lat, w?.coords?.lon);
  console.log(s);
  return <div>Waves</div>;
};
