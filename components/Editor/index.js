'use client';

import ResumeFields from '@/config/ResumeFields';
import { FaSave } from 'react-icons/fa';
import SingleEditor from './SingleEditor';
import MultiEditor from './MultiEditor';
import { useDispatch } from 'react-redux';
import { saveResume } from '@/store/slices/resumeSlice';

const Editor = ({ tab }) => {
    const { multiple } = ResumeFields[tab];
    const dispatch = useDispatch();

    const save = e => {
        e?.preventDefault();
        dispatch(saveResume());
    };

    return (
        <>
            <form onSubmit={save} className="card my-8">
                {multiple && <MultiEditor tab={tab} />}
                {!multiple && <SingleEditor tab={tab} />}

                <button type="submit" className="btn-filled ml-auto mt-6 w-full gap-2 px-6 text-center md:w-auto">
                    <span>Save</span> <FaSave />
                </button>
            </form>
        </>
    );
};

export default Editor;
