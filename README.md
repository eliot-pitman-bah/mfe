# Single-SPA Micro-Frontend Application

A React-based micro-frontend (MFE) application built with single-spa for use in a micro-frontend architecture.

## Features

- Built with React 18 and single-spa
- Webpack 5 configuration with development server
- SystemJS module format for micro-frontend integration
- Hot reload disabled for better single-spa compatibility
- Standalone development mode

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

Run the application in development mode:

```bash
npm start
```

The application will be available at `http://localhost:9000`

### Build

Create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Integration with single-spa

This micro-frontend can be integrated into a single-spa root config:

```javascript
registerApplication({
  name: '@eliot-pitman/mfe',
  app: () => System.import('@eliot-pitman/mfe'),
  activeWhen: ['/mfe']
});
```

### Import Map Configuration

Add this to your root config's import map:

```json
{
  "imports": {
    "@eliot-pitman/mfe": "http://localhost:9000/eliot-pitman-mfe.js"
  }
}
```

## Project Structure

```
mfe/
├── src/
│   ├── index.js       # single-spa entry point with lifecycle methods
│   ├── App.js         # Main React component
│   ├── App.css        # Application styles
│   └── index.html     # Standalone development HTML
├── webpack.config.js  # Webpack configuration
├── .babelrc          # Babel configuration
├── package.json      # Project dependencies and scripts
└── README.md         # This file
```

## Available Scripts

- `npm start` - Start development server on port 9000
- `npm run build` - Create production build
- `npm run build:dev` - Create development build

## Configuration

### Port Configuration

The development server runs on port 9000 by default. To change it, modify the `port` in `webpack.config.js` and `package.json`.

### Public Path

In production, the public path is set to `/mfe/`. Adjust this in `webpack.config.js` based on your deployment strategy.

## License

MIT