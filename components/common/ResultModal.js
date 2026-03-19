const ResultModal = ({ title, content, callbackFn }) => {
    return (
        <div
            className="fixed top-0 left-0 z-[1055] flex h-full w-full justify-center bg-black bg-opacity-20"
            onClick={() => {
                if (callbackFn) {
                    callbackFn();
                }
            }}
        >
            <div className="absolute mt-10 mb-10 min-w-[600px] w-1/4 rounded bg-white px-6 shadow opacity-100 dark:bg-gray-700">
                <div className="mt-6 mb-6 justify-center border-b-4 border-gray-500 bg-warning-400 text-2xl">
                    {title}
                </div>

                <div className="border-b-4 border-orange-400 pt-4 pb-4 text-4xl">
                    {content}
                </div>

                <div className="flex justify-end">
                    <button
                        className="mt-4 mb-4 rounded bg-blue-500 px-6 pt-4 pb-4 text-lg text-white"
                        onClick={() => {
                            if (callbackFn) {
                                callbackFn();
                            }
                        }}
                    >
                        Close Modal
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ResultModal;