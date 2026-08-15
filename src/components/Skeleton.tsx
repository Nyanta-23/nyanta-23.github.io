export default function Skeleton({ className = "" }: { className?: string }) {
    return (
        <div className={`bg-surface-container-high animate-pulse ${className}`} />
    );
}