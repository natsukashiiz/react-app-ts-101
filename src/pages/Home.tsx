import { Skeleton, Space, App } from "antd";
import { useEffect, useState } from "react";
import MBlog from "../components/MBlog";

export default function Home() {

    const { message } = App.useApp();
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<IBlog[]>([]);
    const [page, setPage] = useState<number>(1);

    function handleScroll() {
        try {
            if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 10) {
                message.open({
                    key: 'loading',
                    type: 'loading',
                    content: 'Loading...',
                });

                const newData = Array(5).fill(0).map((_, i) => {
                    return {
                        id: data.length + i,
                        title: `Blog ${data.length + i + 1}`,
                        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatum porro beatae natus, doloremque eos a perferendis, aspernatur adipisci, unde temporibus. Numquam illo consequuntur, magni non corrupti earum magnam animi!
                        Laudantium, id velit eaque, quae perferendis error necessitatibus consectetur exercitationem veritatis enim ut vero asperiores rem cupiditate nulla dolores assumenda debitis, iste consequuntur nisi sapiente. Iste asperiores blanditiis perferendis quod!
                        Aliquam similique rem nisi quasi vitae placeat provident. Eius neque nostrum, officia, nam perspiciatis, ipsam error quisquam eum illo dolor saepe repellat excepturi deleniti laboriosam ipsa. Eos ab minima doloribus!
                        Esse, quod tempore! Voluptatibus adipisci quidem similique fugiat harum nesciunt sit possimus veritatis debitis eum porro rerum incidunt, totam, quisquam ea facilis saepe dolorem, atque maiores inventore nobis sequi quod?
                        Vel quas ullam cupiditate blanditiis architecto nihil consequatur maiores fugit id, dolor accusamus inventore eos natus corporis ad a. Dicta, at rerum? Ullam quos officia perspiciatis totam amet, porro ut!`
                    };
                });

                setData([...data, ...newData]);

                console.log(data);
                setPage(page + 1);
                console.log(page);

                setTimeout(() => {
                    setLoading(false);
                    message.destroy('loading');
                }, 2000);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        message.open({
            key: 'loading',
            type: 'loading',
            content: 'Loading...',
        });

        setData(Array(5).fill(0).map((_, i) => {
            return {
                id: i,
                title: `Blog ${i + 1}`,
                content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatum porro beatae natus, doloremque eos a perferendis, aspernatur adipisci, unde temporibus. Numquam illo consequuntur, magni non corrupti earum magnam animi!
                Laudantium, id velit eaque, quae perferendis error necessitatibus consectetur exercitationem veritatis enim ut vero asperiores rem cupiditate nulla dolores assumenda debitis, iste consequuntur nisi sapiente. Iste asperiores blanditiis perferendis quod!
                Aliquam similique rem nisi quasi vitae placeat provident. Eius neque nostrum, officia, nam perspiciatis, ipsam error quisquam eum illo dolor saepe repellat excepturi deleniti laboriosam ipsa. Eos ab minima doloribus!
                Esse, quod tempore! Voluptatibus adipisci quidem similique fugiat harum nesciunt sit possimus veritatis debitis eum porro rerum incidunt, totam, quisquam ea facilis saepe dolorem, atque maiores inventore nobis sequi quod?
                Vel quas ullam cupiditate blanditiis architecto nihil consequatur maiores fugit id, dolor accusamus inventore eos natus corporis ad a. Dicta, at rerum? Ullam quos officia perspiciatis totam amet, porro ut!`
            };
        }));

        setTimeout(() => {
            setLoading(false);
            message.destroy('loading');
        }, 2000);
    }, [message]);

    return (
        <Space direction="vertical">
            {loading && Array(2).fill(0).map((_, i) => {
                return <Skeleton key={i} avatar paragraph={{ width: '50rem', rows: 7 }} />;
            })}
            {!loading && data.map((val, i) => {
                return <MBlog key={i} data={val} />;
            })}
        </Space>
    );
}