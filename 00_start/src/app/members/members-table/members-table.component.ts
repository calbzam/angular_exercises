import { Component } from '@angular/core';

import { MemberEntity } from '../models/member.model';
import { MembersApiService } from '../members-api.service';

@Component({
  selector: 'app-members-table',
  templateUrl: './members-table.component.html',
  styles: []
})
export class MembersTableComponent {
  members: MemberEntity[];
  company: string;

  constructor(private membersApi: MembersApiService) { }

  loadMembers(company) {
    this.membersApi.getAllMembers(company)
      .subscribe((ms) => this.members = ms);
  }

  onKey(event) {this.company = event.target.value;}

}
