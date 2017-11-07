import { expect } from 'chai'
import { spy, assert } from 'sinon'
import { getServicesMock, getLastMessageSent } from '../mocks'
import { EVENT } from '../../src/constants'
import { TOPIC, RECORD_ACTIONS as RECORD_ACTION } from '../../binary-protocol/src/message-constants'

import { DefaultOptions, Options } from '../../src/client-options'
import { RecordCore } from '../../src/record/record-core'
import { List } from '../../src/record/list'

describe.only('list - online', () => {
  let recordCore: RecordCore
  let list: List
  let options: Options
  let services: any
  let name: string
  let changeCallback: sinon.SinonSpy
  let readyCallback: sinon.SinonSpy

  beforeEach(() => {
    services = getServicesMock()
    options = Object.assign({}, DefaultOptions)
    name = 'someList'
    changeCallback = spy()
    readyCallback = spy()

    recordCore = new RecordCore(name, services, options, () => {})
    recordCore.usages++
    list = new List(recordCore)
    list.subscribe(changeCallback)
    list.whenReady(readyCallback)
  })

  afterEach(() => {
    services.verify()
  })

  it.only('creates the list', () => {
    const message = {
      topic: TOPIC.RECORD,
      action: RECORD_ACTION.SUBSCRIBECREATEANDREAD,
      name
    }
    expect(getLastMessageSent).to.be.equal(message)
    expect(list.subscribe.bind(list, 'somePath', changeCallback)).to.throw('path is not supported for List.subscribe')
    expect(list.getEntries).not.null
    assert.notCalled(readyCallback)
  })

  it('starts with an empty array', () => {
    expect(list.getEntries()).to.be.equal([])
    expect(list.isEmpty()).to.be.equal(true)
  })

  it('receives a response from the server', () => {
    const data = ['entryA', 'entryB']
    recordCore.handle({
      name,
      topic: TOPIC.RECORD,
      action: RECORD_ACTION.READ_RESPONSE,
      parsedData: data
    })

    expect(list.getEntries()).to.be.equal(data)
    expect(list.isEmpty()).to.be.equal(false)

    assert.calledOnce(changeCallback)
    assert.calledWithExactly(changeCallback, data)

    assert.calledOnce(readyCallback)
    assert.calledWithExactly(readyCallback, list)
  })

  describe('updating existent list', () => {
    let entries: Array <any>

    beforeEach(() => {
      entries = ['entryA', 'entryB']
      list.setEntries(entries)
    })


  })

})
