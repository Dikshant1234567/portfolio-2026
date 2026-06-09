// layout/MainLayout.tsx - Scalable
// import Background from '../common/Background';
import { lazy, Suspense } from 'react';
import Container from '../common/Container';
import Navbar from '../components/Navbar';
import LoadingSpinner from '../ui/LoadingSpinner';
const Background = lazy(() => import ('../common/Background'));
interface MainLayoutProps {
    children?: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="relative min-h-screen">
            <div className="fixed inset-0 -z-10">
                <Suspense fallback={<LoadingSpinner/>}>
                <Background />
                </Suspense>
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