import { Actions, ofType } from "@ngrx/effects"
import { NotesService } from '../services/notes.service';
import * as NotesActions from '../actions/note.actions';
import { } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'zen-observable';

export class NoteEffects {
    constructor(private actions: Actions, private dataService: NotesService) { }

    loadNotes = this.actions.pipe(
        ofType(NotesActions.ActionTypes.LoadNotesBegin),
        switchMap(() => {
            return this.dataService.loadata().pipe(
                map(data => new NotesActions.LoadNotesSuccess({ notes: data })),
                catchError(error =>
                    of(new NotesActions.LoadNotesFailure({ error: error }))
                )
            )
        })
    )
    addNote = this.actions.pipe(
        ofType(NotesActions.ActionTypes.CreateNote),

    )
    deleteNote = this.actions.pipe(
        ofType(NotesActions.ActionTypes.DeleteNote),
    )
}