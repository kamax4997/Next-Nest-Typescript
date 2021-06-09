import { MainLayout } from '../app/components/Layout/user/MainLayout';
import { Purposes } from '../app/components/Layout/user/Purposes';
// import styles from '../assets/styles/css/Home.module.css'

export default function Dashboard() {
    return (
        <MainLayout>
            <Purposes />
        </MainLayout>
    )
}
