import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Error() {
    const navigate = useNavigate();

    useEffect(() => {
        const delay = setTimeout(() => {
            navigate('/');
        }, 2500);

        return () => clearTimeout(delay);
    }, []);

    return (
        <div className="diverror">
            <div>
                <h1 style={{color: '#00ff88', fontSize: '60px'}}>Usuário não autenticado</h1>
                <h3 style={{color: 'white'}}>Redirecionando...</h3>
            </div>
        </div>
    )
}