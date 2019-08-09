import { Note } from '../interfaces/Note';
import { ActionsUnion, ActionTypes } from '../actions/note.actions';
import { createSelector } from '@ngrx/store';
import { AppState } from '.';

export interface NoteState {
    data: Note[];
    loading: boolean;
    error: any;
}

export const initialState: NoteState = {
    data: [],
    loading: false,
    error: null
}

export function reducer(
    state = initialState, action: ActionsUnion
): NoteState {
    switch (action.type) {
        case ActionTypes.LoadNotesBegin: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }

        case ActionTypes.LoadNotesSuccess: {
            return {
                ...state,
                loading: false,
                data: action.payload.notes
            }
        }

        case ActionTypes.LoadNotesFailure: {
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        }
        case ActionTypes.CreateNote: {
            return {
                ...state,
                data: [...state.data, action.payload.note]
            }
        }
        case ActionTypes.DeleteNote: {
            console.log({ ...state })
            return {
                ...state,
                // ...state.data.splice(0, 1)
                data: state.data.filter(n => n !== action.payload.note)
            }
        }

        default: {
            return state;
        }
    }
}

export const getNotes = (state: NoteState) => state.data;
export const getNoteById = (state: NoteState, props: { id: string }) => state.data.find(note => note.id === props.id);
