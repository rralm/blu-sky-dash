import Lottie from 'react-lottie-player';
import Loading from '../../Lottie/loading.json';

const Animation = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-transparent">
            <Lottie
                loop
                animationData={Loading}
                play
                style={{ width: 300, height: 300 }}
            />
        </div>
    )
}

export default Animation;