import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/Features/Tasks/tasksSlice";


const AddTasksModal = ({ isOpen, setIsOpen }) => {

    const { register, handleSubmit, reset } = useForm();
    
    const dispatch = useDispatch()

    const onCancel = () => {
        reset();
        setIsOpen(false)
    }
    const onSubmit = (data) => {
        dispatch(addTask(data))
        onCancel();
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title='programming hero'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-3 mb-5">
                    <label htmlFor="title">Title</label>
                    <input
                        className="w-full rounded-md"
                        type="text"
                        {...register("title")} id="title" />
                </div>
                <div className="flex flex-col gap-3 mb-5">
                    <label htmlFor="description">Description</label>
                    <textarea
                        className="w-full rounded-md"
                        type="text"
                        {...register("description")} id="description" />
                </div>
                <div className="flex flex-col gap-3 mb-5">
                    <label htmlFor="deadline">Deadline</label>
                    <input
                        className="w-full rounded-md"
                        type="date"
                        {...register("deadline")} id="deadline" />
                </div>
                <div className="flex flex-col gap-3 mb-5">
                    <label htmlFor="assign">Assign to</label>
                    <select className="w-full rounded-md" id="assign" {...register("assign")}>
                        <option value="Mir Hussain">Mir Hussain</option>
                        <option value="Mezba Abed">Mezba Abed</option>
                        <option value="Nahid Hasan">Nahid Hasan</option>
                        <option value="Mizanur Rahman">Mizanur Rahman</option>
                        <option value="Tanmoy Parvez">Tanmoy Parvez</option>
                        <option value="Fahim Ahmed Firoz">Fahim Ahmed Firoz</option>
                        <option value="Rahatul Islam">Rahatul Islam</option>
                        <option value="Samin Israr Ravi">Samin Israr Ravi</option>
                        <option value="Mehedi Anik">Mehedi Anik</option>
                        <option value="Ehtisam Haq">Ehtisam Haq</option>
                        <option value="Anisur Rahman">Anisur Rahman</option>
                        <option value="Muktadir Hasan">Muktadir Hasan</option>
                        <option value="Masud Alam">Masud Alam</option>
                    </select>
                </div>
                <div className="flex flex-col gap-3 mb-5">
                    <label htmlFor="priority">Priority</label>
                    <select className="w-full rounded-md" id="priority" {...register("priority")}>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <div className="flex gap-3 justify-end">
                    <button
                        onClick={() => onCancel()}
                        type="button" className="btn btn-danger">Cancel</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </Modal>
    );
};

export default AddTasksModal;