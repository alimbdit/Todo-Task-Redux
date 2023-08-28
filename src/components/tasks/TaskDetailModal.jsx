import Modal from "../ui/Modal";
import{useSelector} from "react-redux"



const TaskDetailModal = ({ taskId, isOpen, setIsOpen }) => {
    const {tasks} = useSelector(state => state.tasksSlice);
    const task = tasks.find(item => item.id === taskId)
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={`Task of ${task?.assignTo}`}>
            <div className="bg-secondary/10 rounded-md p-5">
                <h1
                    className={`text-lg font-semibold mb-3  ${task?.priority === 'high' ? 'text-red-500' : ''
                        } ${task?.priority === 'medium' ? 'text-yellow-500' : ''} ${task?.priority === 'low' ? 'text-green-500' : ''
                        }`}
                >
                    {task?.title}
                </h1>
                <p className="mb-3">{task?.description}</p>
                <p className="text-sm">Assigned to - {task?.assignTo}</p>
                <div className="flex justify-between mt-3">
                    <p>Deadline: {task?.date}</p>

                </div>
            </div>
            <div className="flex justify-center">
            <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mt-3"
                onClick={() => setIsOpen(!isOpen)}
            >
                Close
            </button>
            </div>
        </Modal>
    );
};

export default TaskDetailModal;