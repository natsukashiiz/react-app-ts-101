import { Space, App, Spin } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import MBlog from "../components/MBlog";

export default function FetchInfinity() {

    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const { message } = App.useApp();
    const [items, setItems] = useState<IPost[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [page, setPage] = useState(Number(searchParams.get('page')) || 1);
    const [max] = useState(10);


    const fetchData = async () => {
        setIsLoading(true);
        setError(null);

        console.log("fetcher");
        message.open({
            key: 'loading',
            type: 'loading',
            content: 'Loading...',
        });

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
            const data = await response.json() as IPost[];

            setItems(prevItems => [...prevItems, ...data]);
            setPage(prevPage => prevPage + 1);

            navigate({ pathname: location.pathname, search: `?page=${page}` });
        } catch (error) {
            setError(new Error(String(error)));
        } finally {
            setIsLoading(false);
            message.destroy('loading');
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop <= document.documentElement.offsetHeight - 10 || page === (max + 1) || isLoading) {
            return;
        }
        fetchData();
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading]);

    return (
        <Space direction="vertical">
            {items.map((val, i) => {
                return <MBlog key={i} data={val} />;
            })}
            {error && <p>Error: {error.message}</p>}
            {isLoading && <div style={{
                margin: '20px 0',
                marginBottom: '20px',
                textAlign: 'center',
                borderRadius: '4px',
                width: '100%',
            }}>
                <Spin />
            </div>}
        </Space>
    );
}