type HexagonPatternProps = {
    className?: string;
};

export default function HexagonPattern({ className = '' }: HexagonPatternProps) {
    return (
        <div className={`absolute inset-0 w-full h-full opacity-20 ${className}`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2000 1500"
                preserveAspectRatio="xMidYMid slice"
                className="w-full h-full"
            >
                <rect fill="#FFFFFF" width="2000" height="1500" />
                <defs>
                    <path
                        fill="none"
                        strokeWidth="79.5"
                        strokeOpacity="0.06"
                        id="hexPath"
                        d="M0-478l-413.96 717h827.92L0-478l-413.96 717h827.92z"
                    />
                </defs>
                <g transform="scale(0.667)" style={{ transformOrigin: 'center' }}>
                    <g transform="rotate(102 0 0)" style={{ transformOrigin: 'center' }}>
                        <g transform="rotate(-65.6 0 0)" style={{ transformOrigin: 'center' }}>
                            <g transform="translate(1000 750)">
                                <use
                                    stroke="#FF0"
                                    href="#hexPath"
                                    transform="rotate(-32.8 0 0) scale(0.672)"
                                />
                                <use
                                    stroke="#fffa00"
                                    href="#hexPath"
                                    transform="rotate(-28.7 0 0) scale(0.713)"
                                />
                                <use
                                    stroke="#fff400"
                                    href="#hexPath"
                                    transform="rotate(-24.6 0 0) scale(0.754)"
                                />
                                <use
                                    stroke="#ffef00"
                                    href="#hexPath"
                                    transform="rotate(-20.5 0 0) scale(0.795)"
                                />
                                <use
                                    stroke="#ffe900"
                                    href="#hexPath"
                                    transform="rotate(-16.4 0 0) scale(0.836)"
                                />
                                <use
                                    stroke="#ffe300"
                                    href="#hexPath"
                                    transform="rotate(-12.3 0 0) scale(0.877)"
                                />
                                <use
                                    stroke="#ffdd00"
                                    href="#hexPath"
                                    transform="rotate(-8.2 0 0) scale(0.918)"
                                />
                                <use
                                    stroke="#ffd700"
                                    href="#hexPath"
                                    transform="rotate(-4.1 0 0) scale(0.959)"
                                />
                                <use stroke="#ffd000" href="#hexPath" transform="" />
                                <use
                                    stroke="#ffca00"
                                    href="#hexPath"
                                    transform="rotate(4.1 0 0) scale(1.041)"
                                />
                                <use
                                    stroke="#ffc300"
                                    href="#hexPath"
                                    transform="rotate(8.2 0 0) scale(1.082)"
                                />
                                <use
                                    stroke="#ffbc00"
                                    href="#hexPath"
                                    transform="rotate(12.3 0 0) scale(1.123)"
                                />
                                <use
                                    stroke="#ffb400"
                                    href="#hexPath"
                                    transform="rotate(16.4 0 0) scale(1.164)"
                                />
                                <use
                                    stroke="#ffad00"
                                    href="#hexPath"
                                    transform="rotate(20.5 0 0) scale(1.205)"
                                />
                                <use
                                    stroke="#ffa500"
                                    href="#hexPath"
                                    transform="rotate(24.6 0 0) scale(1.246)"
                                />
                                <use
                                    stroke="#ff9c00"
                                    href="#hexPath"
                                    transform="rotate(28.7 0 0) scale(1.287)"
                                />
                                <use
                                    stroke="#ff9300"
                                    href="#hexPath"
                                    transform="rotate(32.8 0 0) scale(1.328)"
                                />
                                <use
                                    stroke="#ff8a00"
                                    href="#hexPath"
                                    transform="rotate(36.9 0 0) scale(1.369)"
                                />
                                <use
                                    stroke="#ff8000"
                                    href="#hexPath"
                                    transform="rotate(41 0 0) scale(1.41)"
                                />
                                <use
                                    stroke="#ff7400"
                                    href="#hexPath"
                                    transform="rotate(45.1 0 0) scale(1.451)"
                                />
                                <use
                                    stroke="#ff6800"
                                    href="#hexPath"
                                    transform="rotate(49.2 0 0) scale(1.492)"
                                />
                                <use
                                    stroke="#ff5a00"
                                    href="#hexPath"
                                    transform="rotate(53.3 0 0) scale(1.533)"
                                />
                                <use
                                    stroke="#ff4a00"
                                    href="#hexPath"
                                    transform="rotate(57.4 0 0) scale(1.574)"
                                />
                                <use
                                    stroke="#ff3400"
                                    href="#hexPath"
                                    transform="rotate(61.5 0 0) scale(1.615)"
                                />
                                <use
                                    stroke="#F00"
                                    href="#hexPath"
                                    transform="rotate(65.6 0 0) scale(1.656)"
                                />
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    );
}
