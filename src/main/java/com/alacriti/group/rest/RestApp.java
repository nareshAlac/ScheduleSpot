package com.alacriti.group.rest;

import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

import com.alacriti.filter.MessageLogFilter;
import com.alacriti.rest.request.handler.NotificationReqHandler;
import com.alacriti.rest.request.handler.ScheduleRequestHandler;
import com.alacriti.rest.request.handler.TestReqHandler;
import com.alacriti.rest.request.handler.UserHandler;

@ApplicationPath("/rest")
public class RestApp extends Application {

	private Set<Object> singletons = new HashSet<Object>();
	private Set<Class<?>> classes = new HashSet<Class<?>>();

	public RestApp() {
	//	classes.add(MessageLogFilter.class);
		classes.add(GSONProvider.class);
		classes.add(UserHandler.class);
		classes.add(ScheduleRequestHandler.class);
		classes.add(TestReqHandler.class);
		classes.add(NotificationReqHandler.class);
	}

	@Override
	public Set<Object> getSingletons() {
		return singletons;
	}

	@Override
	public Set<Class<?>> getClasses() {
		return classes;
	}

}
