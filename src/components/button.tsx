export const Button = () => {
    const handleSearch = () => {
        console.log("버튼 컴포넌트에서 버튼 클릭");
    }
    return (
        <div>
            <button onClick={handleSearch}>버튼</button>
        </div>
    );
}