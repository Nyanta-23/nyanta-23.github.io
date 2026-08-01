import useTypeWriter from "../hooks/useTypewriter";

export default function TypedText({ roles }) {
    

    const typedText = useTypeWriter({
        words: roles.map((role) => role.name),
        typingSpeed: 120,
        deletingSpeed: 60,
        pauseDuration: 1000
    });


    return (
        <div className="text-center">
            <p className="font-mono text-sm uppercase text-on-surface-variant mb-4 w-full h-5">{typedText}</p>
        </div>
    );
}