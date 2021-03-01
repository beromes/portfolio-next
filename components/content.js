export default function Content({ children }) {
    return (
        <>
            <style jsx>{`
                div {
                    padding-top: 60px
                }
            `}</style>

            <div>{ children }</div>
        </>
    )
}