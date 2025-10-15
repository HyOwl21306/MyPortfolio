export default function TabhBtn({children, onSelect, isSelected}) {
    return (
        <>
            <div className={isSelected ? `tabBtn activeTabBtn` : `tabBtn normalTabBtn`} 
                onClick={onSelect}
            >
                {children}
            </div>
        </>
    )
}