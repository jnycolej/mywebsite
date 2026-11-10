export default function ArchitecturalArt({
    compact = false,
} : {
    compact?: boolean;
}) {
    return (
        <div
            className={`architectural-art${compact ? " compact-act" : ""}`}
            aria-hidden="true"
        >
            <div className="art-sun" />
            <div className="art-building">
                <div className="art-windows" />
            </div>
            <div className="art-side" />
            <div className="art-green" />
            <span className="art-cross">+</span>
            <span className="art-caption">FORM / FUNCTION / POSSIBILITY</span>
        </div>
    );
}