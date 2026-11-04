import type { ElevationPoint, LngLat, RouteData } from '../types';

// The files in ./routes are frontend/public/data copied as they are: <id>.geojson became
// <id>.route.json, and elevation/<id>-elevation.json became <id>.elevation.json.

type RouteFile = {
  features: { geometry: { type: string; coordinates: unknown } }[];
};

type RouteFiles = { route: RouteFile; elevation: ElevationPoint[] };

// A function per route, so a route's files are only built when its map opens. Metro needs
// each require written out.
const FILES: Readonly<Record<string, () => RouteFiles>> = {
  'abc-trek': () => ({
    route: require('./routes/abc-trek.route.json'),
    elevation: require('./routes/abc-trek.elevation.json'),
  }),
  'dhulikhel-namobuddha': () => ({
    route: require('./routes/dhulikhel-namobuddha.route.json'),
    elevation: require('./routes/dhulikhel-namobuddha.elevation.json'),
  }),
  'ebc-trek': () => ({
    route: require('./routes/ebc-trek.route.json'),
    elevation: require('./routes/ebc-trek.elevation.json'),
  }),
  'ghorepani-poon-hill-trek': () => ({
    route: require('./routes/ghorepani-poon-hill-trek.route.json'),
    elevation: require('./routes/ghorepani-poon-hill-trek.elevation.json'),
  }),
  'godawari-phulchoki': () => ({
    route: require('./routes/godawari-phulchoki.route.json'),
    elevation: require('./routes/godawari-phulchoki.elevation.json'),
  }),
  'gokyo-valley-trek': () => ({
    route: require('./routes/gokyo-valley-trek.route.json'),
    elevation: require('./routes/gokyo-valley-trek.elevation.json'),
  }),
  'langtang-valley': () => ({
    route: require('./routes/langtang-valley.route.json'),
    elevation: require('./routes/langtang-valley.elevation.json'),
  }),
  'manaslu-circuit': () => ({
    route: require('./routes/manaslu-circuit.route.json'),
    elevation: require('./routes/manaslu-circuit.elevation.json'),
  }),
  'mardi-himal-trek': () => ({
    route: require('./routes/mardi-himal-trek.route.json'),
    elevation: require('./routes/mardi-himal-trek.elevation.json'),
  }),
  'nagarkot-changunarayan': () => ({
    route: require('./routes/nagarkot-changunarayan.route.json'),
    elevation: require('./routes/nagarkot-changunarayan.elevation.json'),
  }),
  'shey-phoksundo': () => ({
    route: require('./routes/shey-phoksundo.route.json'),
    elevation: require('./routes/shey-phoksundo.elevation.json'),
  }),
  'tilicho-lake-trek': () => ({
    route: require('./routes/tilicho-lake-trek.route.json'),
    elevation: require('./routes/tilicho-lake-trek.elevation.json'),
  }),
};

/** Every line in the file, joined, as the web's map does for its markers and flag. */
function lineOf(file: RouteFile): LngLat[] {
  const line: LngLat[] = [];
  for (const { geometry } of file.features) {
    if (geometry.type === 'LineString') {
      line.push(...(geometry.coordinates as LngLat[]));
    } else if (geometry.type === 'MultiLineString') {
      for (const part of geometry.coordinates as LngLat[][]) line.push(...part);
    }
  }
  return line;
}

const built = new Map<string, RouteData>();

/** The trail and its elevation series. Undefined for a trip with no route, like a tour. */
export function getRoute(id: string): RouteData | undefined {
  if (!Object.prototype.hasOwnProperty.call(FILES, id)) return undefined;
  let route = built.get(id);
  if (!route) {
    const files = FILES[id]();
    route = { line: lineOf(files.route), profile: files.elevation };
    built.set(id, route);
  }
  return route;
}
