import { AuthProvider } from './auth';
import { CenteredMiddleBox } from './components';
import { Routes } from './routes/Index';

const onAuthLoading = () => {
    return (
        <CenteredMiddleBox>
            Loading...
        </CenteredMiddleBox>
    );
};

const onAuthError = (error) => {
    return (
        <CenteredMiddleBox>
            Error: {error.toString()}
        </CenteredMiddleBox>
    );
};

function App() {
    return (
        <AuthProvider onLoading={onAuthLoading} onError={onAuthError}>
            <Routes />
        </AuthProvider>
    );
}

export default App;
