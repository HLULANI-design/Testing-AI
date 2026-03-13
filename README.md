# Testing AI 🧪

> A modern React-based dashboard for AI-driven testing and prompt engineering

[![Live Demo](https://img.shields.io/badge/demo-live-green.svg)](https://HLULANI-design.github.io/Testing-AI/)
[![React](https://img.shields.io/badge/React-18.0.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-4.5.14-646CFF.svg)](https://vitejs.dev/)

## 📖 Overview

Testing AI is a comprehensive web application designed to streamline AI model testing and prompt engineering workflows. Built with modern React and TypeScript, it provides an intuitive interface for creating, managing, and analyzing AI test runs with real-time metrics and visualization.

## ✨ Features

### 🎯 Core Functionality
- **Test Case Generation**: Create and manage AI-powered test cases
- **Multi-Model Support**: Test various AI models including Llama, GPT, and more
- **Run Management**: Track test execution with detailed status monitoring
- **Real-time Metrics**: Monitor accuracy, latency, and performance indicators

### 🎨 User Experience
- **Modern Dashboard**: Clean, responsive Bootstrap-based interface
- **Dark/Light Mode**: Theme switching for better accessibility
- **Interactive Charts**: Data visualization with Chart.js integration
- **Notification System**: Real-time updates and alerts
- **Authentication**: Demo login system with user management

### 📊 Analytics & Monitoring
- **Status Visualization**: Real-time charts showing test run status
- **Performance Metrics**: Accuracy tracking and latency measurements
- **Run History**: Complete audit trail of all test executions
- **Log Viewer**: Detailed logging for debugging and analysis

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HLULANI-design/Testing-AI.git
   cd Testing-AI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the application running.

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and context
- **TypeScript** - Type-safe development
- **React Router DOM** - Client-side routing
- **React Bootstrap** - UI component library
- **Bootstrap 5** - CSS framework

### Visualization & Charts
- **Chart.js** - Data visualization
- **React Chart.js 2** - React wrapper for Chart.js
- **React Icons** - Comprehensive icon library

### Forms & Validation
- **Formik** - Form handling and validation

### Build Tools
- **Vite** - Fast build tool and dev server
- **TypeScript** - Type checking and compilation

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AppNavbar.tsx    # Main navigation bar
│   ├── DemoLogin.tsx    # Authentication component
│   ├── MetricsCards.tsx # Dashboard metrics display
│   ├── RunsTable.tsx    # Test runs data table
│   ├── StatusChart.tsx  # Status visualization
│   └── TestRunForm.tsx  # New test run form
├── pages/               # Route components
│   ├── Dashboard.tsx    # Main dashboard
│   ├── Home.tsx         # Landing page
│   ├── NewPrompt.tsx    # Create new test prompt
│   ├── RunDetails.tsx   # Individual run details
│   ├── Runs.tsx         # List all runs
│   └── Welcome.tsx      # Welcome screen
├── lib/                 # Utilities and API
│   ├── api.ts           # API client and mock data
│   ├── types.ts         # TypeScript type definitions
│   └── utils.ts         # Helper functions
├── mocks/               # Mock data for development
│   └── runs.json        # Sample test run data
└── App.tsx              # Main application component
```

## 🎮 Usage

### Creating a New Test Run

1. **Navigate to "New Prompt"** from the main navigation
2. **Enter your prompt text** in the input field
3. **Add context URL** (optional) - supports Jira, Wiki, or public URLs
4. **Submit the form** to create and execute the test
5. **View results** in the automatically generated run details page

### Managing Test Runs

- **Dashboard**: Overview of all runs with status indicators
- **Runs Page**: Detailed table view with filtering and sorting
- **Run Details**: Individual run analysis with logs and metrics
- **Status Monitoring**: Real-time updates on test execution

### Authentication

The application includes a demo authentication system:
- Click "Login" in the navigation bar
- Enter any username to access authenticated features
- Logout functionality maintains session state

## 🔧 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

### Environment Configuration

The application uses Vite for configuration. Create a `.env` file in the root directory for custom settings:

```env
VITE_API_BASE_URL=http://localhost:3001
VITE_APP_TITLE=Testing AI
```

### Mock API

The app currently uses a mock API layer in `src/lib/api.ts`. To integrate with a real backend:

1. Replace mock functions with actual HTTP calls (using axios or fetch)
2. Update the API endpoints in the environment configuration
3. Modify the data structures in `src/lib/types.ts` if needed

## 🎨 Customization

### Theming

The application supports dark/light mode theming. To customize:

1. **CSS Variables**: Modify Bootstrap variables in your stylesheets
2. **Theme Context**: Update the theme switching logic in `App.tsx`
3. **Component Styling**: Individual component styles can be found in their respective files

### Adding New Models

To add support for new AI models:

1. **Update Types**: Add model definitions in `src/lib/types.ts`
2. **Form Options**: Modify the model selection in `TestRunForm.tsx`
3. **API Integration**: Update the API calls in `src/lib/api.ts`

## 📊 Testing

The application includes comprehensive testing scenarios:

- **Unit Tests**: Component-level testing
- **Integration Tests**: API and routing tests  
- **E2E Tests**: Full user workflow validation

Run tests with:
```bash
npm test
```

## 🚢 Deployment

### GitHub Pages (Current Setup)

The project is configured for GitHub Pages deployment:

```bash
npm run deploy
```

### Alternative Deployment Options

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder after running `npm run build`
- **AWS S3**: Upload build files to an S3 bucket with static website hosting
- **Docker**: Create a containerized deployment

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Code Style

- Use TypeScript for all new components
- Follow React hooks patterns
- Maintain consistent formatting with Prettier
- Write meaningful commit messages

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Support

For questions, issues, or feature requests:

- **GitHub Issues**: [Create an issue](https://github.com/HLULANI-design/Testing-AI/issues)
- **Discussions**: Join the [GitHub Discussions](https://github.com/HLULANI-design/Testing-AI/discussions)

## 🎯 Roadmap

- [ ] Real-time collaborative testing
- [ ] Advanced analytics dashboard
- [ ] Custom model integration
- [ ] API key management
- [ ] Test automation scheduling
- [ ] Export functionality for results
- [ ] Advanced filtering and search
- [ ] Performance optimization monitoring

---

**Made with ❤️ by [HLULANI-design](https://github.com/HLULANI-design)**

*Testing AI - Empowering developers with intelligent testing workflows*