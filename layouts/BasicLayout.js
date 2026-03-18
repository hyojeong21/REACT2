import BasicMenu from "../components/menu/BasicMenu";

// props 객체에서 children만 바로 꺼내서 쓰겠다는 뜻 (children은 컴포넌트 사이에 들어간 내용임)
const BasicLayout = ({ children }) => {
    return (
        <>
            {/* BasicMenu 컴포넌트를 화면에 렌더링한다는 의미 */}
            <BasicMenu />

            <header className="bg-teal-400 p-5">
                <h1 className="text-2xl md:text-4xl">Header</h1>
            </header>

            <div className="bg-white my-5 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">

                <main className="bg-sky-300 md:w-2/3 lg:w-3/4 px-5 py-40">
                    {/* BasicLayout을 사용하는 곳에서 넣은 내용이 여기 표시된다는 의미임.
                공통 레이아웃을 만들기 위해 이런 식으로 사용됨 */}
                    {children}
                </main>

                <aside className="bg-green-300 md:w-1/3 lg:w-1/4 px-5 py-40">
                    <h1 className="text-2xl md:text-4xl">Sidebar</h1>
                </aside>

            </div>
        </>
    )
}

export default BasicLayout;