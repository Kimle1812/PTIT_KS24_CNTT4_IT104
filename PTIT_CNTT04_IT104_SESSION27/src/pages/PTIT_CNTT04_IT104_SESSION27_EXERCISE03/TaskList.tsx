import { Link } from 'react-router-dom';

export interface IDataTask {
  id: number;
  title: string;
  description: string;
}

export const tasks: IDataTask[] = [
  {
    id: 1,
    title: "Học React Router",
    description: "Làm quen với Dynamic Routes và useNavigate",
  },
  {
    id: 2,
    title: "Ổn lại Tailwind",
    description: "Thực hành tạo UI cơ bản bằng Tailwind CSS",
  },
  {
    id: 3,
    title: "Hoàn thành BTVN",
    description: "Đẩy code lên GitHub và nộp link",
  },
];

export default function TaskList() {
  return (
    <div className="p-6 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6">Danh sách công việc</h1>
      <div className="space-y-4">
        {tasks.map(task => (
          <div key={task.id} className="border rounded-lg p-4 shadow-sm w-100" >
            <h2 className="text-lg font-semibold">{task.title}</h2>
            <p className="text-gray-600">{task.description}</p>
            <Link 
              to={`/task/${task.id}`} 
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              Xem chi tiết
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
