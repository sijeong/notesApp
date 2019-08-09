import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
@Component({
  selector: 'app-apollo',
  templateUrl: './apollo.page.html',
  styleUrls: ['./apollo.page.scss'],
})
export class ApolloPage implements OnInit {

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery({
      query: gql`{
        fetchNotes{
        title
        content
        }
      }`,
    }).valueChanges.subscribe(result => {
      console.log(result);
    });
  }

}
