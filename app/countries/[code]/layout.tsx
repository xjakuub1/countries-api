import Header from "../../components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-full w-full">
            <header className='z-10 sticky top-0 w-full'>
				<Header />
			</header>
            {children}
        </div>
    );
}