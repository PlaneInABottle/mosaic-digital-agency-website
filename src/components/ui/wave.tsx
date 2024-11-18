type WaveProps = {
    color?: string;
    height?: string;
    opacity?: number;
    className?: string;
};

export default function Wave({
    color = '#fff',
    height = 'h-16',
    opacity = 1,
    className = '',
}: WaveProps) {
    return (
        <div className={`absolute bottom-0 left-0 right-0 w-full ${height} ${className}`}>
            <svg
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                style={{ display: 'block' }}
            >
                <path
                    fill={color}
                    fillOpacity={opacity}
                    d="M0,288L0,32L180,32L180,32L360,32L360,128L540,128L540,288L720,288L720,128L900,128L900,0L1080,0L1080,160L1260,160L1260,64L1440,64L1440,320L1260,320L1260,320L1080,320L1080,320L900,320L900,320L720,320L720,320L540,320L540,320L360,320L360,320L180,320L180,320L0,320L0,320Z"
                ></path>
            </svg>
        </div>
    );
}
