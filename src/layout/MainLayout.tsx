// layout/MainLayout.tsx - Scalable
import { Outlet } from 'react-router-dom';
import Background from '../common/Background';
import Container from '../common/Container';
import Navbar from '../components/Navbar';
import LoadingSpinner from '../ui/LoadingSpinner';

interface MainLayoutProps {
    children?: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="relative min-h-screen">
            <div className="fixed inset-0 -z-10">
                <Background />
            </div>
            <div className="relative z-0">
                {
                    !children ? <LoadingSpinner /> :
                        <Container>
                            <Navbar />
                            {children}
                        </Container>
                }
            </div>
        </div>
    );
}