import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Note } from '../interfaces/Note';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { AppState, getAllNotes, getNoteById } from '../reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CreateNote, DeleteNote } from '../actions/note.actions';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  public notes: Observable<Note[]>;
  public loaded: boolean = false;

  constructor(private store: Store<AppState>, private http: HttpClient, private storage: Storage) {
    this.notes = this.store.select(getAllNotes);
  }

  load(): Promise<boolean> {
    return new Promise((resolve) => {
      this.storage.get('notes').then((notes) => {
        if (notes != null) {
          this.notes = notes;
        }

        this.loaded = true;
        resolve(true);
      });
    });
  }
  loadata(): Observable<any> {
    return this.http.get("/assets/test-data.json");
  }
  save(): void {
    this.storage.set('notes', this.notes);
  }

  getNote(id: string): Observable<Note> {
    // return this.notes.find(notes => notes.id === id);
    return this.store.select(getNoteById, { id: id });
  }

  createNote(title: string): void {
    // let id = Math.max(...this.notes.map(note => parseInt(note.id)), 0) + 1;
    let id = Math.random().toString(36).substring(7);
    let note = {
      id: id.toString(),
      title: title,
      content: ""
    };
    // this.notes.push({
    //   id: id.toString(),
    //   title: title,
    //   content: ''
    // });

    // this.save();
    this.store.dispatch(new CreateNote({ note: note }));
  }

  deleteNote(note: Note): void {
    // let index = this.notes.indexOf(note);

    // if (index > -1) {
    //   this.notes.splice(index, 1);
    //   this.save();
    // }
    console.log(note);
    this.store.dispatch(new DeleteNote({ note: note }));
  }
}


