import Link from "next/link";

export default function Home() {
    return (
        <>
            <header className="fixed top-2 z-10">
                <nav className=" p-0 m-0 w-[100vw] flex justify-around">
                    <ul className="w-[80vw] backdrop-blur-3xl backdrop-opacity-70 backdrop-brightness-200 rounded-lg flex align-middle h-fit p-0 m-0 list-none ">
                        <li className="p-4 text-purple-600">
                            <Link href={"#home"}>CosMos</Link>
                        </li>
                        <li className="p-4 ">
                            <Link href={"#about"}>About</Link>
                        </li>
                        <li className="w-[50vw] flex justify-end p-4 grow">
                            <Link href={"/Login"}>Log in</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main id="main" className=" max-w-[100vw] overflow-y-clip select-none ">
                <div
                    id="home"
                    className="h-[100vh] w-[100vw] flex flex-col justify-center items-center"
                >
                    <div className=" text-6xl p-2">
                        Welcome to <span className="font-mono text-8xl">CosMos</span> experience
                    </div>
                    <Link
                        href={"/Editor"}
                        className="m-4 rounded-xl w-fit h-fit p-2 bg-purple-600 text-6xl"
                    >
                        Get started{" "}
                    </Link>
                </div>
                <div id="about" className="h-[100vh] w-[100vw] flex flex-col justify-center items-center">
                    <span>CosMos is a knowledge space that allows user the full control of what they want to write and display the audience there blog.CosMos is free and opensource.
                    </span>
                    <div className="flex gap-2 max-w-[80vw] overflow-auto">
                    </div>
                </div>
            </main>
        </>
    );
}
