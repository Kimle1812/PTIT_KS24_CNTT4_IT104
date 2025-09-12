import { useParams, useNavigate } from 'react-router-dom'
import { tasks } from './TaskList'

export default function TaskDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = tasks.find(t => t.id === Number(id));

  if (!task) {
    return <p className="p-6 text-red-500">Không tìm thấy công việc!</p>
  }

  return (
    <div className="p-6 ">
      <h2 className="text-2xl font-bold">{task.title}</h2>
      <p className="text-gray-700 mt-2">{task.description}</p>
      <button 
        onClick={() => navigate(-1)} 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Quay lại
      </button>
    </div>
  )
}
