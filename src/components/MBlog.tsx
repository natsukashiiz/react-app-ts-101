import { Card, Space, Avatar } from "antd";

type Props = {
    data: IPost;
};

export default function MBlog({ data }: Props) {
    return (
        <Card key={data.id} title={
            <Space>
                <Avatar style={{ backgroundColor: '#f56a00' }}>N</Avatar> • {new Date().toLocaleDateString()}
            </Space>
        }>
            <h2>{data.id}</h2>
            <h3>{data.title}</h3>
            <p>{data.body}</p>
        </Card>
    );
}