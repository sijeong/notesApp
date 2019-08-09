import { Action } from '@ngrx/store';
import { Note } from '../interfaces/Note';

export enum ActionTypes {
    LoadNotesBegin = "[Notes Service] Load notes",
    LoadNotesSuccess = "[Notes Service] Load note success",
    LoadNotesFailure = "[Notes Service] Load note failure",
    CreateNote = "[Notes Service] Create note",
    DeleteNote = "[Notes Service] Delete note"
}

export class LoadNotesBegin implements Action {
    readonly type = ActionTypes.LoadNotesBegin;
}

export class LoadNotesSuccess implements Action {
    readonly type = ActionTypes.LoadNotesSuccess;
    constructor(public payload: { notes: Note[] }) { }
}

export class LoadNotesFailure implements Action {
    readonly type = ActionTypes.LoadNotesFailure;
    constructor(public payload: { error: any }) { }
}

export class CreateNote implements Action {
    readonly type = ActionTypes.CreateNote;

    constructor(public payload: { note: Note }) { }
}

export class DeleteNote implements Action {
    readonly type = ActionTypes.DeleteNote;
    constructor(public payload: { note: Note }) { }
}

export type ActionsUnion =
    LoadNotesBegin
    | LoadNotesSuccess
    | LoadNotesFailure
    | CreateNote
    | DeleteNote;