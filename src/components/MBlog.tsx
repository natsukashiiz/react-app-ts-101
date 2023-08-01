import { Card, Space, Avatar } from "antd";

type Props = {
    data: IBlog;
};

export default function MBlog({ data }: Props) {
    return (
        <Card key={data.id} title={
            <Space>
                <Avatar style={{ backgroundColor: '#f56a00' }}>N</Avatar> • {new Date().toLocaleDateString()}
            </Space>
        }>
            <h2>{data.title}</h2>
            <p>{data.content}</p>
        </Card>
    );
}