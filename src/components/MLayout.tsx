import MFooter from "./MFooter";
import MNav from "./MNav";

type Props = {
    children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <>
            <MNav />
            <main>
                {children}
            </main>
            <MFooter />
        </>
    );
}