import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import{useSelector, useDispatch} from "react-redux"
import { checkTask } from '../../redux/features/tasks/taskSlice';
import TaskDetailModal from './TaskDetailModal';
import {useState} from 'react';

const MyTasks = () => {

  const {tasks} = useSelector((state) => state.tasksSlice);
  const {name} = useSelector(state => state.userSlice);
  console.log(name)
  const myTasks = tasks.filter(item => item.assignTo === name)
 const dispatch = useDispatch();
 const [isOpen, setIsOpen] = useState(false);
 const [taskId, setTaskId] = useState(null)

 const handleDetail = (id) => {
  setIsOpen(!isOpen);
  setTaskId(id)

 }



  // const item = {
  //   id: 1,
  //   status: 'pending',
  //   title: 'Remove Button',
  //   description:
  //     'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
  //   date: '2023-08-28',
  //   assignedTo: 'Mir Hussain',
  //   priority: 'high',
  // };

  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {
          myTasks?.map(item => <div
            key={item.id}
            className="bg-secondary/10 rounded-md p-3 flex justify-between"
          >
            <h1>{item.title}</h1>
            <div className="flex gap-3">
              <button onClick={() => handleDetail(item.id)} className="grid place-content-center" title="Details">
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>
              
              <button className="grid place-content-center" title="Done">
                <CheckIcon onClick={() => dispatch(checkTask(item.id))} className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>)
        }
        <TaskDetailModal  isOpen={isOpen} setIsOpen={setIsOpen} taskId={taskId}/>
      </div>
    </div>
  );
};

export default MyTasks;
